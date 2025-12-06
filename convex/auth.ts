import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth";
import { emailOTP } from "better-auth/plugins";
import { Resend } from "resend";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";


const siteUrl = process.env.SITE_URL!;

export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (
  ctx: GenericCtx<DataModel>,
  { optionsOnly } = { optionsOnly: false },
) => {
  return betterAuth({
    logger: {
      disabled: optionsOnly,
    },
    trustedOrigins: [siteUrl],
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
      async sendResetPassword({ user, url, token }) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: user.email,
          subject: "Reset your password",
          html: `<p>Your reset code is: <strong>${token}</strong></p>`,
        });
      },
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
    },
    plugins: [
      convex(),
      emailOTP({
        otpLength: 9,
        sendVerificationOnSignUp: true,
        async sendVerificationOTP({ email, otp, type }) {
          const resend = new Resend(process.env.RESEND_API_KEY);
          const formattedOtp = `${otp.slice(0, 3)}-${otp.slice(3, 6)}-${otp.slice(6)}`;
          await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: type === "email-verification"
              ? "Verify your email"
              : "Your verification code",
            html: `<p>Your code: <strong>${formattedOtp}</strong></p>`,
          });
        },
      }),
    ],
  });
};

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return authComponent.getAuthUser(ctx);
  },
});
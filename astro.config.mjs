import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import react from "@astrojs/react";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: "server",
  env: {
    TOKEN: process.env.TOKEN
  },
  integrations: [react()]
});
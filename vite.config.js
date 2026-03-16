import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/",
    plugins: [react()],
});
// export default defineConfig({
//   base: '/portofolio-melly/',
//   plugins: [react()],
// })

# 🚀 Next.js 16 Application

A modern web application built with **Next.js 16.1.6** using a clean,
scalable, and production-ready stack.

------------------------------------------------------------------------

## 🛠 Tech Stack

### Framework

-   Next.js 16.1.6
-   React
-   TypeScript

### Libraries Used

-   Axios -- HTTP client for API requests\
-   SWR -- Data fetching with caching and revalidation\
-   Zustand -- Lightweight state management\
-   Yup -- Schema validation\
-   Tailwind CSS -- Utility-first CSS framework\
-   shadcn/ui -- Reusable and accessible UI components\
-   Sonner -- Toast notifications

------------------------------------------------------------------------

## 📦 Installation

Clone the repository:

``` bash
git clone <your-repo-url>
cd <your-project-name>
```

Install dependencies:

``` bash
pnpm install
# or
npm install
# or
yarn install
```

------------------------------------------------------------------------

## 🧑‍💻 Development

Run the development server:

``` bash
pnpm dev
```

Application runs at:

    http://localhost:3000

------------------------------------------------------------------------

## 🏗 Recommended Project Structure

    /app
    /components
    /hooks
    /lib
    /store
    /styles

------------------------------------------------------------------------

## 🌐 Data Fetching (SWR + Axios)

Example configuration:

``` ts
// lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
```

Example usage:

``` ts
import useSWR from "swr";
import { api } from "@/lib/axios";

const fetcher = (url: string) => api.get(url).then(res => res.data);

const { data, error, isLoading } = useSWR("/users", fetcher);
```

------------------------------------------------------------------------

## 🧠 State Management (Zustand)

``` ts
import { create } from "zustand";

interface AppState {
  count: number;
  increment: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

------------------------------------------------------------------------

## ✅ Form Validation (Yup)

``` ts
import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
```

------------------------------------------------------------------------

## 🎨 UI & Styling

-   Styled using Tailwind CSS\
-   UI components powered by shadcn/ui\
-   Toast notifications handled by Sonner

Example toast:

``` ts
import { toast } from "sonner";

toast.success("Saved successfully!");
```

------------------------------------------------------------------------

## 🏁 Production Build

``` bash
pnpm build
pnpm start
```

------------------------------------------------------------------------

## 📌 Environment Variables

Create a `.env.local` file:

    NEXT_PUBLIC_API_URL=http://localhost:5000

------------------------------------------------------------------------

## 📄 License

This project is open-source and available under the MIT License.

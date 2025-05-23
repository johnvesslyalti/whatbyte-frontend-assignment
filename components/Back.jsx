'use client';

import { StepBack } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Back() {
    const router = useRouter();
    return <button onClick={() => router.push("/")} className="absolute flex justify-center items-center top-5 left-5 text-blue-500 cursor-pointer"><StepBack /><p className="text-xl">Back</p></button>;
}
"use client";
import React, { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name Should have atleast 2 characters.")
    .max(50, "Name should not exceed 50 characters.")
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
      "Name should contain only alphabets."
    ),
  email: z.string().email("Email must be valid."),
  password: z.string().min(6, "Password Should have atleast 6 characters."),
});

const Page = () => {
  const [userType, setUserType] = useState("student");
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const response = await axios.post(
      "http://localhost:3100/api/auth/register",
      values
    );
    console.log(response.data);
  };

  return (
    <>
      <div className="signUpWrapper">
        <div className="formWrapper">
          <div className="left">
            <h3 className="title">
              {userType === "student" ? "Welcome Student!" : "Welcome Teacher!"}
            </h3>
            <p>
              {userType === "student"
                ? "Enter your personal details and start your journey with us as a student."
                : "Enter your personal details and start your journey with us as a teacher."}
            </p>
            <Link href={"/signin"}>
              <Button className="border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8">
                Sign In
              </Button>
            </Link>
          </div>
          <div className="right">
            <h3 className="text-center text-2xl font-semibold">
              Register Here
            </h3>
            <br />
            <div className="userbtn mx-5 items-center">
              <Button
                variant={"outline"}
                className={`student mr-5 bg-black text-white hover:bg-white hover:text-black ${
                  userType === "student" ? "active" : ""
                }`}
                onClick={() => setUserType("student")}
              >
                Student
              </Button>
              <Button
                variant={"outline"}
                className={`teacher ml-2 bg-black text-white hover:bg-white hover:text-black ${
                  userType === "teacher" ? "active" : ""
                }`}
                onClick={() => setUserType("teacher")}
              >
                Teacher
              </Button>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="abc@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

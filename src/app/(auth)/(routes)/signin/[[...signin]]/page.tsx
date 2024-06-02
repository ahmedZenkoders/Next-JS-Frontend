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

const signInSchema = z.object({
  email: z.string().email("Email must be valid."),
  password: z.string().min(6, "Password Should have atleast 6 characters."),
});

const Page = () => {
  const [userType, setUserType] = useState("student");
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const response = await axios.post(
      "http://localhost:3100/api/auth/login",
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
              Hello, {userType === "student" ? "Student" : "Teacher"}!
            </h3>
            <p>Enter your personal details and start your journey with us</p>
            <Link href={"/signup"}>
              <Button className="border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8">
                Sign Up
              </Button>
            </Link>
          </div>
          <div className="right">
            <h3 className="text-center text-2xl font-semibold">Sign In As</h3>
            <div className="userbtn mx-5 items-center mt-5 mb-2">
              <Button
                onClick={() => setUserType("student")} // Set user type to student
                variant={"outline"}
                className={`student mr-5 bg-black text-white hover:bg-white hover:text-black ${
                  userType === "student" ? "active" : ""
                }`}
              >
                Student
              </Button>
              <Button
                onClick={() => setUserType("teacher")} // Set user type to teacher
                variant={"outline"}
                className={`teacher ml-2 bg-black text-white hover:bg-white hover:text-black ${
                  userType === "teacher" ? "active" : ""
                }`}
              >
                Teacher
              </Button>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
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

'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

async function logMovies() {
  const response = await fetch("https://f93d-171-101-132-204.ngrok-free.app/login" ,{
    method: "get",
    headers: new Headers({
      "ngrok-skip-browser-warning": "true",
    }),
  });
  const movies = await response.json();
  console.log(movies);
}

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });


  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-7'>
        <div className=''>
        <div className='container mx-auto py-4'>
        <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-40 rounded-lg border-t-4 border-red-300">
            <h3 className="text-xl font-bold my-4">Login</h3>
          <hr className='my-3'  />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='mail@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


      <Button onClick={async() => logMovies()} className='w-full mt-6 bg-red-500 p-2 rounded-md text-white' type='submit'>
          Sign up
        </Button>

      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <p className='flex flex-col gap-3 text-center text-sm text-gray-600 mt-2'>
        If you don&apos;t have an account, please&nbsp;
        <Link className='flex flex-col gap-3 text-blue-500 hover:underline' href='/sign-up'>
          Sign up
        </Link>
      </p>
      </div>
      </div>
      </div>
      </div>
      
      </form>
    </Form>
    
  );

};

export default SignInForm;

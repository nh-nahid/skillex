"use client"

import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { createCheckoutSession } from '@/app/actions/stripe';

 export const EnrollCourse = ({ aslink }) => {
    const formAction = async (data) => {

      const {url} = await createCheckoutSession(data);
      window.location.assign(url);
    }
    return (
        <>

            <form action={formAction}>
            {
                aslink ? (
                    <Button type="submit"
                        size="sm"
                        variant="ghost"
                        className="text-indigo-400 hover:bg-indigo-500/10 hover:scale-105 transition-transform"
                    >
                        Enroll <ArrowRight className="w-3 ml-1" />
                    </Button>
                ) : (
                    <Button type="submit"
                        href="#"
                        className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium shadow-lg shadow-indigo-500/30 hover:scale-105 transition"
                    >
                        Enroll Now
                    </Button>
                )
            }
            </form>
        </>
    );
};


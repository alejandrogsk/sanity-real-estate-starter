import { Realtor } from "@/types/Realtor";
import Image from "next/image";
import React from "react";
import builder from "../../sanity/config/image-builder-config";
import Link from "next/link";

const RealtorCard = ({ realtor }: { realtor: Realtor }) => {
    const { name, lastName, profileImage } = realtor;

    return (
        <div className="bg-white shadow py-12 px-8 rounded-[1.5rem] flex flex-col gap-4 relative top-0 lg:sticky lg:top-[6rem]">
            <div className="flex items-center gap-3 bg-gray-dark p-3 rounded-[1rem]">
                <Image
                    src={builder.image(profileImage._ref).url()}
                    alt={`${name} ${lastName} profile image`}
                    width={300}
                    height={300}
                    className="rounded-full h-[3rem] w-[3rem]"
                />
               <div>
                <h5>{`${name} ${lastName}`}</h5>
                <Link href="/" className="text-primary-main font-medium text-sm">View Profile</Link>
               </div>
            </div>

            <form className="w-full flex flex-col gap-2">
                <input name="clientName" placeholder="Name" className="  h-[2.5rem] px-2 placeholder:text-black outline-none border-[1px] rounded-[1rem] text-sm" />
                <input name="clientPhone" placeholder="Phone" className="h-[2.5rem] px-2 placeholder:text-black outline-none border-[1px] rounded-[1rem] text-sm"/>
                <input name="clientEmail" placeholder="Email" className="h-[2.5rem] px-2 placeholder:text-black outline-none border-[1px] rounded-[1rem] text-sm"/>
                <textarea name="clientMessage" placeholder="Hello, I'm interested in..."
                className="min-h-[2.5rem] p-2 placeholder:text-black outline-none border-[1px] rounded-[1rem] text-sm"
                />

                <button className="rounded-tr-[1rem] text-lg font-semibold bg-black hover:bg-primary-main transition-all text-white w-full min-h-[3rem] lg:min-h-[3.5rem] mt-3">
                    Submit Message
                </button>
            </form>

        </div>
    );
};

export default RealtorCard;

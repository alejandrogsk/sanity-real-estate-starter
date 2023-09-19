import { Realtor } from "@/types/Realtor";
import Image from "next/image";
import React from "react";
import builder from "../../sanity/config/image-builder-config";
import Link from "next/link";

const RealtorCard = ({ realtor }: { realtor: Realtor }) => {
    const { name, lastName, profileImage } = realtor;

    return (
        <div className="bg-white shadow py-12 px-8  flex flex-col gap-4 relative top-0 lg:sticky lg:top-[6rem]">
            <div className="flex items-center gap-3 bg-gray-dark p-3 ">
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
                <input name="clientName" placeholder="Name" className="form-input" />
                <input name="clientPhone" placeholder="Phone" className="form-input"/>
                <input name="clientEmail" placeholder="Email" className="form-input"/>
                <textarea name="clientMessage" placeholder="Hello, I'm interested in..."
                className="form-textarea"
                />

                <button className=" text-lg font-semibold bg-black hover:bg-primary-main transition-all text-white w-full min-h-[3rem] lg:min-h-[3.5rem] mt-3">
                    Submit Message
                </button>
            </form>

        </div>
    );
};

export default RealtorCard;

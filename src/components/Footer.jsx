
import { HeartPulse, Headset, MessageSquare,Mail } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <div className="pt-2">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] items-stretch gap-8 px-8 md:px-12 py-8 bg-[linear-gradient(135deg,#032F30,#064E46)] border-t border-[#1A5A54]">

                {/* Branding column */}
                <div className="flex flex-col pt-6">
                    <div className="flex items-center gap-2 text-[30px] font-bold text-[#2EE6C0]">
                        <HeartPulse className="h-8 w-8 text-emerald-400" />
                        <span>
                            <span className="text-white">Immuni</span>Quest
                        </span>
                    </div>

                    <div className="px-4 mb-2">
                        <p className="leading-relaxed font-serif italic text-gray-100">
                            Every Child. Every Dose. On Time
                        </p>

                        <div className="my-2 h-0.5 w-24 rounded-full bg-[#2EE6C0]"></div>

                        <p className="max-w-sm text-[15px] font-serif leading-tight text-gray-300">
                            A smarter way to manage vaccinations and ensure a healthier tomorrow for every child.
                        </p>
                    </div>

                    <div className="flex items-center gap-5 text-3xl text-gray-300 px-4 py-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                            <FaGithub className="cursor-pointer hover:text-[#2EE6C0] transition-all" />
                        </a>

                        <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className="cursor-pointer hover:text-[#2EE6C0] transition-all" />
                        </a>

                        <a href="https://x.com/username" target="_blank" rel="noreferrer">
                            <FaXTwitter className="cursor-pointer hover:text-[#2EE6C0] transition-all" />
                        </a>
                    </div>
                </div>

                {/* Support column */}
                <div className="flex flex-col pt-5 border-t border-white/30 md:border-t-0 md:border-l md:pl-25 m:pt-0">
                    <div className="flex items-center gap-2 text-[25px] font-semibold">
                        <Headset className="h-8 w-8 text-emerald-400" />
                        <span className="text-white">Support</span>
                    </div>

                    <div className="flex flex-col space-y-3 p-4 text-gray-100">
                        <a href="/privacy" className="hover:text-emerald-300 transition-all hover:text-[17px]">
                            Privacy Policy
                        </a>

                        <a href="/termsofservice" className="hover:text-emerald-300 transition-all hover:text-[17px]">
                            Terms of Service
                        </a>

                        <a href="/help" className="hover:text-emerald-300 transition-all hover:text-[17px]">
                            Help Center
                        </a>

                        <a href="/contact" className="hover:text-emerald-300 transition-all hover:text-[17px]">
                            Contact
                        </a>

                        <a href="/faqs" className="hover:text-emerald-300 transition-all hover:text-[17px]">
                            FAQs
                        </a>
                    </div>
                </div>

                {/* Stay Connected column */}
                <div className="flex flex-col  border-t border-white/30  md:border-t-0 md:border-l md:pl-25 md:pt-0 ">
                    <div className="flex items-center gap-2 text-[25px] font-semibold mb-1">
                        <MessageSquare className="h-8 w-8 text-emerald-400 pt-1" />
                        <span className="text-white pt-1">Stay Connected</span>
                    </div>
    
                    <p className="max-w-sm text-[15px] leading-tight text-gray-300 pt-1 mb-5">
                    Have questions or need assistance? Get in touch with our team.
                    </p>

                {/* General Enquiries */}
                <div className="flex items-start gap-3 font-semibold">
                    <Mail className="h-5 w-5 text-emerald-400 mt-1 shrink-0" />
                    <div className="flex flex-col">
                        <p className="text-white text-[18px] leading-snug">General Enquiries</p>
                        <p className="text-gray-300 font-light">info@immuniquest.example</p>
                    </div>       
                </div>

                {/* Technical Support */}
                    <div className="flex items-start gap-3 pt-4 font-semibold">
                        <Headset className="h-5 w-5 text-emerald-400 mt-1 shrink-0" />
                        <div className="flex flex-col">
                            <p className="text-white text-[18px] leading-snug">Technical Support</p>
                            <p className="text-gray-300 font-light">support@immuniquest.example</p>
                        </div>       
                    </div>
                    <div className="text-gray-500 text-[12px] px-4 pt-1">
                        <p>Illustrative email addresses, not actual registered accounts.</p>
                    </div>
                </div>

                <div className="col-span-full h-px w-full mx-auto bg-white/10"></div>
                <div>
                    <p className="text-gray-300 text-sm">
                         © {new Date().getFullYear()} ImmuniQuest. All rights reserved.
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;

"use client";
import AccordionItem from "@/app/_components/AccordionItem";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "To book an appointment, simply select a doctor, choose an available time slot, and confirm your booking. You'll receive a confirmation notification instantly.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment from your profile under the 'My Appointments' section. Make sure to check the cancellation policy of the doctor before proceeding.",
  },
  {
    question: "Is there a consultation fee?",
    answer:
      "Consultation fees vary by doctor and specialty. You can view the fee details before booking an appointment.",
  },
  {
    question: "Are online consultations available?",
    answer:
      "Yes! Many doctors offer online consultations via video calls. You can filter doctors based on availability for online or in-person visits.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "If you need assistance, you can reach out to our support team through the 'Help & Support' section in the app or email us at support@quickcare.com.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use encryption and secure protocols to protect your personal data. Your health information is only shared with the doctor you book an appointment with.",
  },
];

function Accordion() {
  const [isActive,setIsActive] = useState(null);
  return(
    <div className="rounded-xl pb-4 w-[95%] flex flex-col gap-3">
       
        {faqs.map((el,i)=> <AccordionItem isActive={isActive === i ? true:false} setIsActive={setIsActive} key={i} el={el} index={i}/>)}
    </div>
  )
}

export default Accordion;

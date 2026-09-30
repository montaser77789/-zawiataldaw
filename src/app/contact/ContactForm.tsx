"use client";

import { FormEvent, useState } from "react";
import { BsSend } from "react-icons/bs";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="border-r-2 border-primary bg-surface p-8 text-right lg:p-10">
        <h3 className="text-[24px] text-text-primary lg:text-[30px]">تم إرسال رسالتك</h3>
        <p className="mt-4 text-[16px] leading-[2] text-text-secondary lg:text-[18px]">
          شكراً لتواصلك معنا. سيقوم فريق زاوية الضوء بالرد عليك في أقرب وقت.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary transition hover:underline"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-[15px] text-text-primary">
          الاسم
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className="h-[54px] w-full rounded-none border border-border bg-white px-4 text-[16px] outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="اسمك الكامل"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-[15px] text-text-primary">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="h-[54px] w-full rounded-none border border-border bg-white px-4 text-[16px] outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="example@email.com"
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-[15px] text-text-primary">
            رقم الجوال
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="h-[54px] w-full rounded-none border border-border bg-white px-4 text-[16px] outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="05xxxxxxxx"
            dir="ltr"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[15px] text-text-primary">
          الرسالة
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="w-full resize-y rounded-none border border-border bg-white px-4 py-3 text-[16px] outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="اكتب رسالتك هنا..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-[58px] items-center gap-3 bg-primary px-8 text-white transition hover:bg-dark-surface lg:h-[64px]"
      >
        <BsSend size={18} />
        <span>إرسال الرسالة</span>
      </button>
    </form>
  );
}

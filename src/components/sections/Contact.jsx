import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useLang } from "context/LangContext";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { Label } from "components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function EmployerForm() {
  const { t } = useLang();
  const [data, setData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    roles_needed: "",
    headcount: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!data.company_name || !data.contact_person || !data.email || !data.roles_needed) {
      toast.error("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries/employer`, data);
      toast.success(t.contact.employer.success);
      setData({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        roles_needed: "",
        headcount: "",
        message: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const f = t.contact.employer;
  return (
    <form onSubmit={submit} data-testid="employer-form" className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label={f.company} required>
          <Input
            data-testid="employer-company"
            value={data.company_name}
            onChange={(e) => update("company_name", e.target.value)}
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.person} required>
          <Input
            data-testid="employer-person"
            value={data.contact_person}
            onChange={(e) => update("contact_person", e.target.value)}
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.email} required>
          <Input
            data-testid="employer-email"
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.phone}>
          <Input
            data-testid="employer-phone"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.roles} required>
          <Select value={data.roles_needed} onValueChange={(v) => update("roles_needed", v)}>
            <SelectTrigger
              data-testid="employer-roles"
              className="rounded-none border-[#E2E8F0] focus:ring-0 h-11"
            >
              <SelectValue placeholder="—" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectItem value="Nursing Staff">{t.roles.nurse}</SelectItem>
              <SelectItem value="Housekeeping">{t.roles.housekeeping}</SelectItem>
              <SelectItem value="MEP">{t.roles.mep}</SelectItem>
              <SelectItem value="Mixed">Mixed / Multiple</SelectItem>
              <SelectItem value="Other">{t.roles.other}</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label={f.headcount}>
          <Input
            data-testid="employer-headcount"
            value={data.headcount}
            onChange={(e) => update("headcount", e.target.value)}
            placeholder="e.g. 20–50"
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
      </div>
      <Field label={f.message}>
        <Textarea
          data-testid="employer-message"
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44]"
        />
      </Field>
      <Button
        data-testid="employer-submit"
        type="submit"
        disabled={submitting}
        className="bvg-btn-primary h-12 px-8 rounded-none bg-[#0A1F44] hover:bg-[#0F2D63] text-white text-[13px] font-medium tracking-[0.12em] uppercase"
      >
        {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
        {f.submit}
      </Button>
    </form>
  );
}

function CandidateForm() {
  const { t } = useLang();
  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone: "",
    profession: "",
    experience_years: "",
    german_language_level: "",
    resume_link: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!data.full_name || !data.email || !data.profession) {
      toast.error("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/applications/candidate`, data);
      toast.success(t.contact.candidate.success);
      setData({
        full_name: "",
        email: "",
        phone: "",
        profession: "",
        experience_years: "",
        german_language_level: "",
        resume_link: "",
        message: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const f = t.contact.candidate;
  return (
    <form onSubmit={submit} data-testid="candidate-form" className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label={f.name} required>
          <Input
            data-testid="candidate-name"
            value={data.full_name}
            onChange={(e) => update("full_name", e.target.value)}
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.email} required>
          <Input
            data-testid="candidate-email"
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.phone}>
          <Input
            data-testid="candidate-phone"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.profession} required>
          <Select value={data.profession} onValueChange={(v) => update("profession", v)}>
            <SelectTrigger
              data-testid="candidate-profession"
              className="rounded-none border-[#E2E8F0] focus:ring-0 h-11"
            >
              <SelectValue placeholder="—" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectItem value="Nurse">{t.roles.nurse}</SelectItem>
              <SelectItem value="Housekeeping">{t.roles.housekeeping}</SelectItem>
              <SelectItem value="MEP Technician">{t.roles.mep}</SelectItem>
              <SelectItem value="Other">{t.roles.other}</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label={f.experience}>
          <Input
            data-testid="candidate-experience"
            value={data.experience_years}
            onChange={(e) => update("experience_years", e.target.value)}
            placeholder="e.g. 3"
            className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
          />
        </Field>
        <Field label={f.language}>
          <Select
            value={data.german_language_level}
            onValueChange={(v) => update("german_language_level", v)}
          >
            <SelectTrigger
              data-testid="candidate-language"
              className="rounded-none border-[#E2E8F0] focus:ring-0 h-11"
            >
              <SelectValue placeholder="—" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {t.langLevels.map((lvl) => (
                <SelectItem key={lvl} value={lvl}>
                  {lvl}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label={f.resume}>
        <Input
          data-testid="candidate-resume"
          value={data.resume_link}
          onChange={(e) => update("resume_link", e.target.value)}
          placeholder="https://"
          className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44] h-11"
        />
      </Field>
      <Field label={f.message}>
        <Textarea
          data-testid="candidate-message"
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className="rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0A1F44]"
        />
      </Field>
      <Button
        data-testid="candidate-submit"
        type="submit"
        disabled={submitting}
        className="bvg-btn-primary h-12 px-8 rounded-none bg-[#0A1F44] hover:bg-[#0F2D63] text-white text-[13px] font-medium tracking-[0.12em] uppercase"
      >
        {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
        {f.submit}
      </Button>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="space-y-2">
      <Label className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#475569]">
        {label} {required && <span className="text-[#0055FF]">*</span>}
      </Label>
      {children}
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 lg:py-32 bg-[#F8F9FA] border-t border-[#E2E8F0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
        >
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
              {t.contact.overline}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-[#0A1F44]">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-base text-[#475569] leading-relaxed max-w-2xl">
              {t.contact.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 bg-white border border-[#E2E8F0] p-6 sm:p-10">
            <Tabs defaultValue="employer" data-testid="contact-tabs">
              <TabsList className="rounded-none bg-[#F8F9FA] border border-[#E2E8F0] p-1 h-auto w-full grid grid-cols-2">
                <TabsTrigger
                  value="employer"
                  data-testid="tab-employer"
                  className="rounded-none text-[12px] tracking-[0.12em] uppercase font-medium data-[state=active]:bg-[#0A1F44] data-[state=active]:text-white data-[state=active]:shadow-none py-2.5"
                >
                  {t.contact.tabEmployer}
                </TabsTrigger>
                <TabsTrigger
                  value="candidate"
                  data-testid="tab-candidate"
                  className="rounded-none text-[12px] tracking-[0.12em] uppercase font-medium data-[state=active]:bg-[#0A1F44] data-[state=active]:text-white data-[state=active]:shadow-none py-2.5"
                >
                  {t.contact.tabCandidate}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="employer" className="mt-8">
                <EmployerForm />
              </TabsContent>
              <TabsContent value="candidate" className="mt-8">
                <CandidateForm />
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#E2E8F0] bg-white p-6" data-testid="contact-india">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-semibold text-[#0055FF] mb-3">
                <MapPin className="h-3.5 w-3.5" /> {t.contact.india}
              </div>
              <div className="font-heading text-base font-semibold text-[#0A1F44]">
                {t.contact.indiaAddr}
              </div>
              <div className="mt-4 space-y-1.5 text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> india@bvggermany.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> +91 20 0000 0000
                </div>
              </div>
            </div>

            <div className="border border-[#E2E8F0] bg-[#0A1F44] text-white p-6" data-testid="contact-germany">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-semibold text-[#7FA2FF] mb-3">
                <MapPin className="h-3.5 w-3.5" /> {t.contact.germany}
              </div>
              <div className="font-heading text-base font-semibold">
                {t.contact.germanyAddr}
              </div>
              <div className="mt-4 space-y-1.5 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> germany@bvggermany.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> +49 69 0000 0000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

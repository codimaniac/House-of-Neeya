import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/SelectInput";
import Textarea from "@/components/ui/TextArea";

export default function Home() {
  const faq = {
    "How long does delivery takes?": "Lagos: 24–48 hours. Nationwide: 2–5 business days. International: 7–14 days.",
    "What is your return policy?": "7-day return on unworn items in original condition. Contact us via WhatsApp or email to initiate.",
    "How do I know my size?": "Each listing includes a size guide. If between sizes, size up. Our team is happy to advise on WhatsApp.",
    "Are the products authentic?": "Absolutely. Every item is personally vetted by Neeya for quality before joining the collection.",
    "Do you offer payment on delivery?": "Yes — Pay on Delivery within Lagos. Elsewhere: bank transfer, card, or mobile money."
  }
  
  return (
    <>
      <SectionLayout className="relative text-center bg-foreground overflow-hidden after:content-[''] after:absolute after:-bottom-px after:inset-x-0 after:h-10 after:bg-background after:[clip-path:ellipse(55%_100%_at_50%_100%)]">
        <div className="flex flex-col items-center justify-center gap-4">
          <SectionLayout.Tag>Get in Touch</SectionLayout.Tag>
          <SectionLayout.Heading className="text-background italic">
            Contact Us
          </SectionLayout.Heading>
        </div>
      </SectionLayout>
      <SectionLayout className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col min-w-100">
          <SectionLayout.Tag>Reach Us</SectionLayout.Tag>
          <SectionLayout.Heading className="leading-normal">We&apos;d love to <br /> hear from you.</SectionLayout.Heading>
          <hr className="w-20 border-primary"/>
        </div>        
        <div className="flex flex-col gap-4 bg-white rounded-lg px-6 py-15">
          <SectionLayout.Heading className="text-[clamp(18px,14vw,24px)] font-semibold">Send a Message</SectionLayout.Heading>
          <hr className="w-20 border-primary"/>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <Input
              type="text"
              label="Name *"
              placeholder="Your full name"
              className="min-w-70"
            />
            <Input
              type="email"
              label="Email *"
              placeholder="johndoe@email.com"
              className="min-w-70"
            />
          </div>
          <Select label="Subject">
            <option>Select a topic</option>
            <option>Order Enquiry</option>
            <option>Returns & Exchanges</option>
            <option>Product Question</option>
            <option>Collaboration</option>
            <option>Others</option>
          </Select>
          <Textarea label="Message" />
          <Button>Submit</Button>
        </div>
      </SectionLayout>
      <SectionLayout className="flex flex-col justify-center items-center text-center bg-white">
        <SectionLayout.Tag>FAQ</SectionLayout.Tag>
        <SectionLayout.Heading>Common Questions</SectionLayout.Heading>
        <Accordion>
          {
            Object.entries(faq).map(([question, answer]) => (
              <AccordionItem key={question} title={question}>{answer}</AccordionItem>
            ))
          }
        </Accordion>
      </SectionLayout>
    </>
  );
}

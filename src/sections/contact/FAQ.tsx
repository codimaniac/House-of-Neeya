import SectionLayout from "@/components/layout/SectionLayout"
import Accordion, { AccordionItem } from "@/components/ui/Accordion"

const FAQ = () => {
  const faq = {
    "How long does delivery takes?":
      "Lagos: 24–48 hours. Nationwide: 2–5 business days. International: 7–14 days.",
    "What is your return policy?":
      "7-day return on unworn items in original condition. Contact us via WhatsApp or email to initiate.",
    "How do I know my size?":
      "Each listing includes a size guide. If between sizes, size up. Our team is happy to advise on WhatsApp.",
    "Are the products authentic?":
      "Absolutely. Every item is personally vetted by Neeya for quality before joining the collection.",
    "Do you offer payment on delivery?":
      "Yes — Pay on Delivery within Lagos. Elsewhere: bank transfer, card, or mobile money.",
  };
  return (
        <SectionLayout className="flex flex-col justify-center items-center text-center bg-white">
          <SectionLayout.Tag>FAQ</SectionLayout.Tag>
          <SectionLayout.Heading>Common Questions</SectionLayout.Heading>
          <Accordion>
            {Object.entries(faq).map(([question, answer]) => (
              <AccordionItem key={question} title={question}>
                {answer}
              </AccordionItem>
            ))}
          </Accordion>
        </SectionLayout>
  )
}

export default FAQ
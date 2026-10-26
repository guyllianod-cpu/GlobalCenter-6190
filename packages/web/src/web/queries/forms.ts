/** Hooks des formulaires (contact, partenariat, devis, newsletter) */
import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export const useContactSubmit = () => useMutation(orpc.contact.submit.mutationOptions());
export const usePartnershipSubmit = () => useMutation(orpc.partnership.submit.mutationOptions());
export const useQuoteSubmit = () => useMutation(orpc.quote.submit.mutationOptions());
export const useNewsletterSubscribe = () => useMutation(orpc.newsletter.subscribe.mutationOptions());

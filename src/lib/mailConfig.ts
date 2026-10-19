/** Source unique de verite des adresses e-mail du site.
 *
 * Reception : MAIL_TO part dans la variable `to_email` du template EmailJS
 * (template_7b1nh7i). Pour que ces adresses soient prises en compte, le champ
 * « To Email » de ce template doit valoir {{to_email}} cote tableau de bord
 * EmailJS. Une fois ce reglage fait, changer de destinataire se fait ici, dans
 * le code, puis par un simple redeploiement.
 *
 * Plusieurs destinataires : EmailJS accepte une liste separee par des virgules.
 */
export const MAIL_RECIPIENTS = ["news@afridigital.fr", "afridigital4@gmail.com"];

export const MAIL_TO = MAIL_RECIPIENTS.join(",");

/** Adresses affichees sur la page Contact du site. */
export const CONTACT_EMAIL_GENERAL = "news@afridigital.fr";
export const CONTACT_EMAIL_SUPPORT = "afridigital4@gmail.com";

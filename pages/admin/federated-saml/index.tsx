import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import jackson from '@lib/jackson';

export { default } from 'ee/federated-saml/pages/index';

export async function getServerSideProps({ locale }) {
  const { checkLicense } = await jackson();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      hasValidLicense: await checkLicense(),
    },
  };
}

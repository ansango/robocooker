import { findTokenByIdAndType } from "@/lib-api/db/token";
import { database } from "@/lib-api/middlewares";
import GreyContainer from "components/common/Container/GreyContainer";
import BadLink from "components/recovery/BadLink";
import RecoveryForm from "components/recovery/RecoveryForm";
import { GetServerSideProps, NextPage } from "next";
import nc from "next-connect";

const Token: NextPage<{ tokenId: TokenId; valid: boolean }> = ({
  valid,
  tokenId,
}) => {
  return (
    <GreyContainer>
      {valid ? <RecoveryForm tokenId={tokenId} /> : <BadLink />}
    </GreyContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  await nc().use(database).run(context.req, context.res);
  try {
    const tokenDoc = await findTokenByIdAndType(
      context.req.db,
      context.params.tokenId,
      "passwordReset"
    );
    return {
      props: {
        tokenId: context.params.tokenId,
        valid: !!tokenDoc,
      },
    };
  } catch (error) {
    return {
      props: {
        tokenId: context.params.tokenId,
        valid: false,
      },
    };
  }
};

export default Token;

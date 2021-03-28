import translate from "google-translate-api";
import { NextApiRequest, NextApiResponse } from "next";
import thesaurus from "thesaurus";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.query?.keywords) {
    res.status(400).json({
      type: "Malformed query string",
    });
  }

  const keywords: Array<string> = req.query.keywords.toString().split(",");

  const thesaurusised = keywords.flatMap((keyword) => thesaurus.find(keyword));

  const toEO = async (word) => translate(word, { to: "eo" });
  const espwords = Promise.all(
    thesaurusised.map(async (word) => {
      try {
        const eoword = await toEO(word);
        return eoword;
      } catch (err) {
        // console.log(err);
      }
    })
  );

  res.status(200).json(await espwords);
}

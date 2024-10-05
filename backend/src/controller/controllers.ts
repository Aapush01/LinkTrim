import expres from "express";
import { urlModel } from "../model/UrlModel";
import { url } from "inspector";

export const createUrl = async (req: expres.Request, res: expres.Response) => {
  const { fullUrl } = req.body;
  try {
    const urlFound = await urlModel.findOne({ fullUrl });
    if (urlFound) {
      res.send(urlFound);
    } else {
      const ShortUrl = await urlModel.create({ fullUrl });
      res.status(201).send(ShortUrl);
    }
  } catch (e) {
    res.status(500).send(" OOPS...something went wrong!");
  }
};

export const getAllUrl = async (req: expres.Request, res: expres.Response) => {
  try {
    const shortUrl = await urlModel.find();
    if (shortUrl.length === 0) {
      res.status(404).send({ message: "Urls not found" });
    } else {
      res.status(200).send(shortUrl);
    }
  } catch (e) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const getUrl = async (req: expres.Request, res: expres.Response) => {
  try {
    const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
    if (!shortUrl) {
      res.status(404).send("Url not found");
    } else {
      shortUrl.clicks++;
      shortUrl.save();
      res.redirect(`${shortUrl.fullUrl}`);
    }
  } catch (e) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const deleteUrl = async (req: expres.Request, res: expres.Response) => {
  try {
    const shortUrl = await urlModel.findById({ _id: req.params.id });
    if (!shortUrl) {
      res.status(200).send("Url successfully deleted!");
    }
  } catch (e) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

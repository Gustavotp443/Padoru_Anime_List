import React from "react"

export type InputType = {
  name: string;
  placeholder: string;
  type: string;
  onChange: React.ChangeEventHandler;
}

export type AnimeState = {
  data: AnimeResp;
}

export type AnimeResp = {
  id: number;
  attributes: Attributes;
}

export type AttributesNever = Attributes[] | never[];

export type Attributes = {
  ageRatingGuide: string;
  posterImage: PosterImage;
  canonicalTitle: string;
  status: string;
  showType: string;
  endDate: string;
  startDate: string;
  episodeCount: number;
  synopsis: string;
  ratingRank: number;
  popularityRank: number;
  averageRating: string;
}

export type PosterImage = {
  large: string;
}

export interface ApplicationItem {
  slug: string;
  aliases?: string[];
  name: string;
  title: string;
  image: string;
  description: string;
  pairedStoneSlug?: string;
  pairedStoneName?: string;
  recommendedStoneSlugs: string[];
  designTips?: string[];
}

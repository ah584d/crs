export interface PostsDto {
  items: PostDto[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface PostDto {
  tags: string[];
  owner: OwnerDto;
  is_answered: true;
  view_count: number;
  accepted_answer_id: number;
  answer_count: number;
  community_owned_date: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}

export interface OwnerDto {
  account_id: number;
  reputation: number;
  user_id: 1;
  user_type: string;
  accept_rate: number;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface listBusiness {
  status_code:number
  message:string
  data: businnes[]
}

export interface businnes {
  id:number
  user_id:number
  title:string
  slug:string
  excerpt:string
  content:string
  content_html:string
  published_at:string
  published:string
  created_at:string
  updated_at:string
  metadata:string
  summary:string
  has_summary:string
}

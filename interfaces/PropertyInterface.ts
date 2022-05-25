export interface PropertyInterface {
  address: string
  age: number
  bathroom_amount: number
  branch: {
    address: string
    alternative_phone: string
    alternative_phone_area: string
    alternative_phone_country_code: string
    alternative_phone_extension: string
    branch_type: string
    contact_time: string
    created_date: string
    display_name: string
    email: string
    geo_lat: null
    geo_long: null
    gm_location_type: string
    id: number
    is_default: boolean
    logo: string
    name: string
    pdf_footer_text: string
    phone: string
    phone_area: string
    phone_country_code: string
    phone_extension: string
    use_pdf_footer: boolean
  }
  created_at: string
  custom1: string
  custom_tags: []
  deleted_at: string
  depth_measure: string
  description: string
  development: null
  development_excel_extra_data: string
  disposition: null
  expenses: number
  extra_attributes: []
  fake_address: string
  files: []
  floors_amount: number
  front_measure: string
  geo_lat: string
  geo_long: string
  gm_location_type: string
  id: number
  internal_data: {
    commission: string
    cotization_users: []
    internal_comments: string
    key_location: null
    legally_checked: number
    legally_checked_text: string
    maintenance_user: string
    network_information: string
    producer_comision: string
    property_owners: [
      {
        birthdate: null
        cellphone: string
        created_at: string
        document_number: string
        email: string
        id: number
        name: string
        other_email: string
        other_phone: string
        phone: string
        updated_at: string
        work_email: string
      },
    ]
    transaction_requirements: string
  }
  is_starred_on_web: boolean
  legally_checked: string
  location: {
    divisions: []
    full_location: string
    id: number
    name: string
    parent_division: null
    short_location: string
    state: string
    weight: number
  }
  occupation: []
  operations: [
    {
      operation_type: string
      prices: [
        {
          currency: string
          period: number
          price: number
        },
      ]
    },
  ]
  orientation: null
  parking_lot_amount: number
  photos: [
    {
      description: string
      image: string
      is_blueprint: boolean
      is_front_cover: boolean
      order: number
      original: string
      thumb: string
    },
  ]
  producer: {
    cellphone: string
    email: string
    id: number
    name: string
    phone: string
    picture: string
    position: string
  }
  property_condition: string
  public_url: string
  publication_title: string
  real_address: string
  reference_code: string
  rich_description: string
  roofed_surface: string
  room_amount: number
  semiroofed_surface: string
  situation: string
  status: number
  suite_amount: number
  surface: string
  surface_measurement: string
  tags: []
  toilet_amount: number
  total_surface: string
  transaction_requirements: string
  type: {
    code: string
    id: number
    name: string
  }
  unroofed_surface: string
  videos: []
  web_price: boolean
  zonification: string
}

export interface PropertyExcelInterface {
  id: number
  active: boolean
  observations: string
  description: string
  operation_type: string
  owner: string
  property_type: string
  batch: number
  sector: number
  bedrooms: number
  bathrooms: number
  toilette: boolean
  pool: false
  barbacue: boolean
  operation_id: number
  property_type_id: number
  zone_id: number
  playroom: false
  dependency: false
  meters_covered: number
  meters_batch: number
  time_periods: [
    {
      month: string
      price: number
      agent: string
    },
    {
      month: string
      price: number
      agent: string
    },
  ]
  photos: { img: string; alt: string }[]
}

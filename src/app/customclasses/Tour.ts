export class Tour {
  constructor(
    public id = 0,
    public title = '',
    public available_seats = 0,
    public price = 0,
    public discounted_price = 0,
    public image: { data: Uint8Array; type: string } | string,
    public imageUrl?: string // To store the Base64 string or URL for display
  ) {}

  // You can add instance methods here if needed
}

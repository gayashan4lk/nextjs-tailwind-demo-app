export default function handler(req: any, res: any) {
  res.status(200).json({
    data: [
      { id: 1, name: 'John', age: 25, country: 'United States' },
      { id: 2, name: 'Braddy', age: 21, country: 'Canada' },
      { id: 3, name: 'Fred', age: 19, country: 'United kingdom' },
    ],
  })
}

// Company facts — taken from the business card, road signboard, carton labels
// and email screenshots supplied by the client. Edit here to update the site.
export const company = {
  emails: ['tajcitrus@gmail.com', 'taj_citrus@yahoo.com'],
  mapQuery: 'Kot Momin Road, Lalliani, Sargodha, Pakistan',
  people: [
    { key: 'ceo', phone: '0300-8607490', intl: '923008607490' },
    { key: 'imran', phone: '0300-8607744', intl: '923008607744' },
    { key: 'asif', phone: '0300-6003428', intl: '923006003428' },
  ],
  whatsapp: '923008607744',
};

const img = (f) => `${import.meta.env.BASE_URL}images/${f}`;
export const images = {
  logo: img('logo.jpg'),
  card: img('business-card.jpg'),
  front: img('factory-front.jpg'),
  bays: img('factory-loading-bays.jpg'),
  compressors: img('cold-storage-compressors.jpg'),
  office: img('office.jpg'),
  nameSign: img('name-sign.jpg'),
  roadSign: img('road-sign.jpg'),
  sorting: img('sorting-line.jpg'),
  washing: img('washing-waxing.jpg'),
  grader: img('size-grader.jpg'),
  inspection: img('inspection.jpg'),
  handPacking: img('hand-packing.jpg'),
  cartons: img('branded-cartons.jpg'),
  openCartons: img('open-cartons.jpg'),
  closeup: img('carton-closeup.jpg'),
  readyToShip: img('ready-to-ship.jpg'),
  coldInside: img('cold-store-inside.jpg'),
  coldSign: img('cold-storage-sign.jpg'),
  mango: img('mango.jpg'),
  potato: img('potatoes.jpg'),
  potatoSingle: img('potato.jpg'),
};

export const gallery = [
  { src: images.nameSign, cat: 'factory', key: 'g1' },
  { src: images.front, cat: 'factory', key: 'g2' },
  { src: images.office, cat: 'factory', key: 'g3' },
  { src: images.bays, cat: 'factory', key: 'g4' },
  { src: images.roadSign, cat: 'factory', key: 'g5' },
  { src: images.sorting, cat: 'processing', key: 'g6' },
  { src: images.washing, cat: 'processing', key: 'g7' },
  { src: images.grader, cat: 'processing', key: 'g8' },
  { src: images.inspection, cat: 'processing', key: 'g9' },
  { src: images.handPacking, cat: 'packing', key: 'g10' },
  { src: images.closeup, cat: 'packing', key: 'g11' },
  { src: images.openCartons, cat: 'packing', key: 'g12' },
  { src: images.cartons, cat: 'packing', key: 'g13' },
  { src: images.readyToShip, cat: 'packing', key: 'g14' },
  { src: images.coldInside, cat: 'storage', key: 'g15' },
  { src: images.compressors, cat: 'storage', key: 'g16' },
  { src: images.mango, cat: 'produce', key: 'g18' },
  { src: images.potato, cat: 'produce', key: 'g19' },
  { src: images.potatoSingle, cat: 'produce', key: 'g20' },
];

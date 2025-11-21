export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "quran",
      file_url: "http://aqar.rf.gd/media/quran.mp4",
      sort_order: 1
    }
  ]);
}

import path from "path"
import multer from "multer"
import crypto from "crypto"

const folderPath = path.resolve(__dirname, "..", "..", "temp")

export default {
  directory: folderPath,
  storage: multer.diskStorage({
    destination: folderPath,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex")
      const filename = `${fileHash}-${file.originalname}`
      callback(null, filename)
    },
  }),
}

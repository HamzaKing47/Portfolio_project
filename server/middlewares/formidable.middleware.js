import formidable from "formidable";

const formidableMiddleware = () => {
  return (req, res, next) => {
    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).send({ error: "Formidable middleware error" });
      }

      for (const key in fields) {
        if (Array.isArray(fields[key])) {
          fields[key] = fields[key][0];
        }
      }

      req.fields = fields;
      req.files = files;
      next();
    });
  };
};

export default formidableMiddleware;

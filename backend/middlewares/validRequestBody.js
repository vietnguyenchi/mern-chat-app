const validRequestBody = (validator) => async (req, res, next) => {
   try {
      const { error } = await validator.validate(req.body, { abortEarly: false });

      if (error) {
         const errors = error.details.map((err) => err.message);

         return res.status(400).json({ message: errors });
      }

      next();
   } catch (error) {
      next(error)
   }
}

export default validRequestBody;
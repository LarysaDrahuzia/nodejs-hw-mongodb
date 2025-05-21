import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, resizeBy, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const error = createHttpError(
      400,
      'Bad request! Enter required fields or valid field values.',
      { errors: err.details },
    );
    next(error);
  }
};

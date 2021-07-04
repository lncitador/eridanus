import mongoose from "mongoose";

// Iniciar conexão com o banco de dados.
mongoose.connect(`mongodb://localhost:27017/dailyplanet`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

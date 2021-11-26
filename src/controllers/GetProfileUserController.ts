import { Request, Response } from "express";
import { GetProfileUserService } from "../services/ProfileUserServise";


class GetProfileUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const service = new GetProfileUserService();

    const result = await service.execute(user_id);

    response.json(result);
  }
}

export { GetProfileUserController };

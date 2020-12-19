
import { ApiRequest, ApiResponse } from "./model";
import { Body, Controller, Post, Route } from "tsoa";

@Route("helloworld")
export class UsersController extends Controller {
  @Post()
  public async createUser(
    @Body() request: ApiRequest
  ): Promise<ApiResponse> {
    console.log(request);
    return { uuid: "0000-0000-0000-0000", message: `Hello ${request.name}` };
  }
}

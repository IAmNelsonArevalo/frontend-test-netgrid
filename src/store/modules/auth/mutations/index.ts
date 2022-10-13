/** Interfaces */
import { AuthState, LogoutData } from "@/models/interfaces/auth.interfaces";

const useMutations = () => {
  /**
   * This mutation close session in the system.
   * @param {AuthState} state - auth's states.
   * @param {LogoutData} data - data returned.
   */
  const logout = (state: AuthState, data: LogoutData): void => {
    state.session = data;
  };

  const createUser = (state: AuthState, data: any): void => {
    state.session = data;
  };

  return {
    logout,
    createUser,
  };
};

export default useMutations;

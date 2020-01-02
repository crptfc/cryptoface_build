import { T_account } from './account';
import { T_transaction } from './transaction';
export interface T_cryptoface<T_opt, N_tx_currency extends string, N_tx_unit extends string, T_IN_create_account, T_IN_get_account, T_IN_create_transaction, T_IN_get_transaction> {
    /**
     * Create one crypto account (could be a "wallet")
     * @param opt
     */
    create_account(opt?: T_IN_create_account): T_account | Promise<T_account>;
    /**
     * Create many crypto accounts
     * @param opt
     */
    create_accountS?(optS?: T_IN_create_account[]): T_account[] | Promise<T_account[]>;
    /**
     * Get one crypto account's (could be a "wallet") info
     * @param opt
     */
    get_account(opt?: T_IN_get_account): T_account | Promise<T_account>;
    /**
     * Get many crypto accounts' info
     * @param opt
     */
    get_accountS?(optS?: T_IN_get_account[]): T_account[] | Promise<T_account[]>;
    /**
     * Create one transaction
     * @param opt
     */
    create_transaction(opt?: T_IN_create_transaction): any;
    /**
     * Create many transactions
     * @param opt
     */
    create_transactionS?(optS?: T_IN_create_transaction[]): any;
    /**
     * Get one transaction
     * @param opt
     */
    get_transaction(opt?: T_IN_get_transaction): T_transaction<N_tx_currency, N_tx_unit> | Promise<T_transaction<N_tx_currency, N_tx_unit>>;
    /**
     * Get many transactions
     * @param opt
     */
    get_transactionS?(opt?: T_IN_get_transaction[]): T_transaction<N_tx_currency, N_tx_unit>[] | Promise<T_transaction<N_tx_currency, N_tx_unit>[]>;
}

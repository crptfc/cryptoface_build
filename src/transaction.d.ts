export interface T_transaction<N_currency extends string, N_unit extends string> {
    /**
     * Transaction identifier
     *
     * txid in bitcoin or transaction hash in ethereum.
     */
    id?: string;
    /**
     * The amount value of this transaction
     *
     * @example
     * `1`: could stand for 1 BTC, 1 SAT or 1 ETH, depend on `currency` and `unit`.
     */
    value?: number;
    /**
     * Currency symbol
     *
     * @example 'USD' | 'BTC' | 'ETH'
     */
    currency?: N_currency;
    /**
     * Value unit
     *
     * @example
     * 'BTC': 1 bitcoin.
     * 'ETH': 1 ethereum.
     * 'mBTC': 1/1000 bitcoin.
     * 'SAT': 1/100000000, satoshi.
     */
    unit?: N_unit;
    /**
     * Convert transaction value to a another defined unit
     * @param value
     * @param from
     * @param to
     */
    unit_convert(value: number, from: N_unit, to: N_unit): number | Promise<number>;
}

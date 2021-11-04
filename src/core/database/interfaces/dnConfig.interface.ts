export interface IdatabaseConfigAttributes {
    username?: string
    password?: string
    database?: string
    host?: string
    port?: number | string
    dialect?: string
    urlDatabase?: string
}

export interface IDatabaseConfig {
    development: IdatabaseConfigAttributes
    test: IdatabaseConfigAttributes
    production: IdatabaseConfigAttributes
}
/* Replace with your SQL commands */
CREATE TABLE public."chairs"
(
    id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    name character varying,
    type character varying,
    url character varying,
    price money,
    color character varying,
    arm boolean,
    armMaterial character varying,
    backColor character varying,
    backMaterial character varying,
    seatColor character varying,
    seatMaterial character varying,
    headRest boolean,
    heightAdjustable character varying,
    pushback character varying,
    stand CHARACTER VARYING,
    wheel CHARACTER VARYING
)

TABLESPACE pg_default;

ALTER TABLE public."chairs"
    OWNER to postgres;
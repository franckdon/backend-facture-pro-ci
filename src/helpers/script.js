exports.SCHEMA_TENANT_SQL = `
-- 1. TABLES INDÉPENDANTES
CREATE TABLE IF NOT EXISTS \`tiers\` (
    \`id\` BIGINT NOT NULL AUTO_INCREMENT,
    \`uuid\` CHAR(36) NOT NULL UNIQUE,
    \`code_tiers\` VARCHAR(150) NOT NULL UNIQUE,
    \`raison_sociale_tiers\` VARCHAR(150) NOT NULL,
    \`telephone_tiers\` VARCHAR(150) NULL,
    \`email_tiers\` VARCHAR(150) NULL,
    PRIMARY KEY (\`id\`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS \`information_complementaire\` (
    \`id\` BIGINT NOT NULL AUTO_INCREMENT,
    \`uuid\` CHAR(36) NOT NULL UNIQUE,
    \`nom_commercial\` VARCHAR(150) NULL,
    \`autre_mention\` TEXT NULL,
    \`pied_de_page\` VARCHAR(255) NULL,
    \`plus_d_information\` TEXT NULL,
    PRIMARY KEY (\`id\`)
) ENGINE=InnoDB;

-- 2. TABLE ENTETE (NIVEAU 1)
CREATE TABLE IF NOT EXISTS \`entete_facture\` (
    \`id\` BIGINT NOT NULL AUTO_INCREMENT,
    \`uuid\` CHAR(36) NOT NULL UNIQUE,
    \`numero_facture\` VARCHAR(100) NOT NULL,
    \`date_facture\` DATE NOT NULL,
    \`code_type_facture\` VARCHAR(50) NOT NULL,
    \`code_type_facturation\` VARCHAR(50) NOT NULL,
    \`code_mode_paiement\` VARCHAR(50) NOT NULL,
    \`code_devise\` VARCHAR(50) NOT NULL,
    \`total_ht\` DECIMAL(19,4) NOT NULL,
    \`total_tva\` DECIMAL(19,4) NOT NULL,
    \`total_remise\` DECIMAL(19,4) NOT NULL,
    \`total_autre_taxe\` DECIMAL(19,4) NOT NULL,
    \`total_ttc\` DECIMAL(19,4) NOT NULL,
    \`point_vente\` VARCHAR(150) NOT NULL,
    \`etablissement\` VARCHAR(150) NOT NULL,
    \`certifie\` TINYINT NOT NULL DEFAULT 0,
    \`retour_ncc\` VARCHAR(200) NULL,
    \`retour_id_facture\` VARCHAR(200) NULL,
    \`retour_token\` VARCHAR(200) NULL,
    \`numero_facture_origine\` VARCHAR(200) NULL,
    \`id_tiers\` BIGINT NOT NULL,
    \`id_information_complementaire\` BIGINT NULL,
    PRIMARY KEY (\`id\`),
    CONSTRAINT \`FK_entete_facture_tiers\` FOREIGN KEY (\`id_tiers\`) REFERENCES \`tiers\` (\`id\`),
    CONSTRAINT \`FK_entete_facture_info_comp\` FOREIGN KEY (\`id_information_complementaire\`) REFERENCES \`information_complementaire\` (\`id\`)
) ENGINE=InnoDB;

-- 3. TABLE DETAIL (NIVEAU 2)
CREATE TABLE IF NOT EXISTS \`detail_facture\` (
    \`id\` BIGINT NOT NULL AUTO_INCREMENT,
    \`uuid\` CHAR(36) NOT NULL UNIQUE,
    \`id_entete_facture\` BIGINT NOT NULL,
    \`code_taux_imposition\` VARCHAR(50) NOT NULL,
    \`reference_article\` VARCHAR(100) NULL,
    \`designation_article\` VARCHAR(250) NULL,
    \`quantite\` DOUBLE NOT NULL,
    \`unite_vente\` VARCHAR(50) NOT NULL,
    \`prix\` DECIMAL(19,4) NOT NULL,
    \`montant_ht\` DECIMAL(19,4) NOT NULL,
    \`remise\` FLOAT NOT NULL,
    \`montant_ttc\` DECIMAL(19,4) NOT NULL,
    \`id_taux_impositon\` BIGINT NOT NULL,
    \`montant_taux_imposition\` DECIMAL(19,4) NOT NULL,
    \`retour_detail\` VARCHAR(150) NOT NULL,
    \`ligne_avoir\` TINYINT NOT NULL,
    \`id_detail_origine_facture\` BIGINT NOT NULL,
    \`montant_remise\` DECIMAL(19,4) NOT NULL,
    PRIMARY KEY (\`id\`),
    CONSTRAINT \`FK_detail_facture_entete\` FOREIGN KEY (\`id_entete_facture\`) REFERENCES \`entete_facture\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 4. TABLES DES TAXES (NIVEAU 3)
CREATE TABLE IF NOT EXISTS \`taxe_details\` (
    \`id\` BIGINT NOT NULL AUTO_INCREMENT,
    \`id_detail_facture\` BIGINT NOT NULL,
    \`libelle_taxe_details\` VARCHAR(50) NULL,
    \`taux_taxe_details\` FLOAT NOT NULL,
    \`montant_taxe_details\` DECIMAL(19,4) NOT NULL,
    PRIMARY KEY (\`id\`),
    CONSTRAINT \`FK_taxe_details_ligne\` FOREIGN KEY (\`id_detail_facture\`) REFERENCES \`detail_facture\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS \`taxe_pieds\` (
    \`id\` BIGINT NOT NULL AUTO_INCREMENT,
    \`id_entete_facture\` BIGINT NOT NULL,
    \`libelle_taxe_pieds\` VARCHAR(50) NULL,
    \`taux_taxe_pieds\` FLOAT NOT NULL,
    \`montant_taxe_pieds\` DECIMAL(19,4) NOT NULL,
    PRIMARY KEY (\`id\`),
    CONSTRAINT \`FK_taxe_pieds_entete\` FOREIGN KEY (\`id_entete_facture\`) REFERENCES \`entete_facture\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB;
`;
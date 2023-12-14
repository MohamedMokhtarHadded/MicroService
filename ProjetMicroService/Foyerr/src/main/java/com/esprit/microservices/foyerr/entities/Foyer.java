package com.esprit.microservices.foyerr.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Foyer {

    @Id
    @GeneratedValue
    private int idFoyer;
    String nomFoyer;
    int capacite;

    public Foyer() {
    }

    public Foyer(String nomFoyer, int capacite) {
        this.nomFoyer = nomFoyer;
        this.capacite = capacite;
    }

    public void setNomFoyer(String nomFoyer) {
        this.nomFoyer = nomFoyer;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public int getIdFoyer() {
        return idFoyer;
    }

    public String getNomFoyer() {
        return nomFoyer;
    }

    public int getCapacite() {
        return capacite;
    }
}

package com.Univ.universitemicroservice.entities;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Table(name = "universite")
@NoArgsConstructor
public class Universite implements Serializable {

    private static final long serialVersionUID = 6;

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "nomUniversite")
    private String nomUniversite;

    @Column(name = "adresse")
    private String adresse;



    public Universite(String nomUniversite, String adresse) {
        this.nomUniversite = nomUniversite;
        this.adresse = adresse;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomUniversite() {
        return nomUniversite;
    }

    public void setNomUniversite(String nomUniversite) {
        this.nomUniversite = nomUniversite;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
}

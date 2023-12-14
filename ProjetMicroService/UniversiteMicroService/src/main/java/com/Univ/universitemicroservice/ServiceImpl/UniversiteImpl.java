package com.Univ.universitemicroservice.ServiceImpl;

import com.Univ.universitemicroservice.entities.Universite;
import com.Univ.universitemicroservice.repository.UniversiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversiteImpl {

    @Autowired
    private UniversiteRepository universiteRepository;



    public Universite getUnivByid(int id) {
        return universiteRepository.findUniversiteById(id);
    }

    public Universite addUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }

    public List<Universite> getAllCUniversite() {
        return universiteRepository.findAll();
    }

    public Universite updateUniversite( Universite newUniversite) {
        return universiteRepository.save(newUniversite);
    }

    public void removeUniversite(int id) {
        universiteRepository.deleteById(id);
    }









}

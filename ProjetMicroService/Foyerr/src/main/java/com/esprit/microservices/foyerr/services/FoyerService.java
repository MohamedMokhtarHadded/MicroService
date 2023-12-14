package com.esprit.microservices.foyerr.services;

import com.esprit.microservices.foyerr.entities.Foyer;
import com.esprit.microservices.foyerr.repository.FoyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoyerService {

    @Autowired
    private FoyerRepository foyerRepository;

    public Foyer getFoyerById(int id){
        return foyerRepository.findById(id).orElse(null);
    }

    public Foyer addFoyer(Foyer foyer){
        return foyerRepository.save(foyer);
    }

    public List<Foyer> displayAllFoyer(){
        return foyerRepository.findAll();
    }

    public Foyer displayFoyer(Integer idFoyer){
        return foyerRepository.findById(idFoyer).orElse(null);
    }


    public Foyer updateFoyer(Integer idFoyer, Foyer newFoyer) {

        if (foyerRepository.findById(idFoyer).isPresent()) {
            Foyer existingFoyer = foyerRepository.findById(idFoyer).get();
            existingFoyer.setNomFoyer(newFoyer.getNomFoyer());
            existingFoyer.setCapacite(newFoyer.getCapacite());
            return foyerRepository.save(existingFoyer);
        } else
            return null;
    }


    public String deleteFoyer(Integer idFoyer) {
        if (foyerRepository.findById(idFoyer).isPresent()) {
            foyerRepository.deleteById(idFoyer);
            return "Foyer supprimé";
        } else
            return "Foyer non supprimé";
    }


}

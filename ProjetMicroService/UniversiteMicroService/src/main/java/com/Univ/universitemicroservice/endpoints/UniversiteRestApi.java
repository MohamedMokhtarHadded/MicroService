package com.Univ.universitemicroservice.endpoints;

import com.Univ.universitemicroservice.ServiceImpl.UniversiteImpl;
import com.Univ.universitemicroservice.entities.Universite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/universite")
public class UniversiteRestApi {

    @Autowired
    private UniversiteImpl universiteimpl;

    private String title = "hello";

    @RequestMapping("hello")
    public String sayHello(){
        System.out.println(title);
        return title;
    }



    @PostMapping("SaveUniv")
    public Universite addUniversite(@RequestBody Universite universite) {
        return universiteimpl.addUniversite(universite);
    }

    @GetMapping("afficheUniv")
    public List<Universite> getAllUniversites() {
        return universiteimpl.getAllCUniversite();
    }

    @PutMapping("ModifUniv")
    public Universite updateUniversite( @RequestBody Universite newUniversite) {
        return universiteimpl.updateUniversite(newUniversite);
    }

    @DeleteMapping("/DeleteUniv/{id}")
    public ResponseEntity<String> removeBloc(@PathVariable("id") int id) {
        universiteimpl.removeUniversite(id);
        return ResponseEntity.ok("Deleted successfully");
    }


    @RequestMapping(method = RequestMethod.GET, value ="/afficheuniversite/{id}")
    Universite getUnivByid(@PathVariable("id") int id){
        return universiteimpl.getUnivByid(id);
    }

}

package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.service.EntryService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/entries/{id}")
public class EntryController {

    private EntryService entryService;

    public EntryController(EntryService entryService) {
        this.entryService = entryService;
    }

    //Returns the entry with the id <id> to <url>/entries/<id>
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Optional<Entry> getEntry(@PathVariable String id) {
        return entryService.findById(Long.parseLong(id));
    }

    //The Controller for Delete requests to <url>/entries/<id>
    @DeleteMapping
    @ResponseStatus(HttpStatus.FOUND)
    public void deleteEntry(@PathVariable String id) {
        System.out.println(id);
        entryService.deleteEntry(Long.parseLong(id));
    }
}
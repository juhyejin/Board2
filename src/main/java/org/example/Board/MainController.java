package org.example.Board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.Random;

@Controller
public class MainController {
    @Autowired
    ArticleRepository articleRepository;
    @GetMapping("/write")
    public String write(){
        return "write";
    }
   //REquestParam에서 필e수가 아니고 싶을땐 required를 fals로 해주면됨 optional 하게 처리
    @GetMapping("/")
    public String main(@RequestParam(required = false) String keyword,@RequestParam(required = false) String option,Model model){
        Iterable<Article> result;
        if(keyword == null){
            result = articleRepository.findAll();
        }else{
            if(option == null){
                result = articleRepository.findByTitleContaining(keyword);
            } else if (option.equals("writer")){
                result = articleRepository.findByWriter(keyword);
           }else if(option.equals("content")){
               result = articleRepository.findByContentContainingOrderByTitle(keyword);
           }else if(option.equals("password")){
                result = articleRepository.findByPassword(keyword);
            }else if(option.equals("title and content")) {
                result = articleRepository.findByTitleOrContent(keyword, keyword);
            }
            else {
               result = articleRepository.findByTitleContaining(keyword);
           }
        }
        model.addAttribute("articles", result);

        return "index";
    }

    @GetMapping("/view")
    public String view(@RequestParam Long id, Model model){
        Optional<Article> result= articleRepository.findById(id);

        model.addAttribute("article", result.get());

        return "view";
    }

    @PostMapping("/write")
    public String postWrite(@ModelAttribute("article")Article article){
        articleRepository.save(article);
        return "rediect:/";
    }

    @GetMapping("/random")
    @ResponseBody
    public String random() {
        Random random = new Random();
        int r = random.nextInt(255);
        int g = random.nextInt(255);
        int b = random.nextInt(255);

        return String.valueOf(r) + "," + String.valueOf(g) + "," + String.valueOf(b);
    }
    @GetMapping("/gradationrandom")
    @ResponseBody
    public String gradationrandom(){
        Random random = new Random();
        int r1 = random.nextInt(255);
        int g1 = random.nextInt(255);
        int b1 = random.nextInt(255);
        int deg = random.nextInt(360);

        return String.valueOf(r1)+","+String.valueOf(g1)+","+String.valueOf(b1)+","+String.valueOf(deg);
    }
}
